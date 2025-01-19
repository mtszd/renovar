import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

// Obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateThumbnails(folderName: string): Promise<void> {
    if (!folderName) {
        throw new Error('Debes especificar el nombre de la carpeta');
    }

    const baseDir: string = path.join(__dirname, '../../public/img/works');
    const workDir: string = path.join(baseDir, folderName);
    
    try {
        // Verificar que la carpeta existe
        try {
            await fs.access(workDir);
        } catch {
            throw new Error(`La carpeta ${folderName} no existe en ${baseDir}`);
        }

        // Crear carpeta thumb si no existe
        const thumbDir: string = path.join(workDir, 'thumb');
        await fs.mkdir(thumbDir, { recursive: true });
        
        // Leer archivos .webp
        const files: string[] = (await fs.readdir(workDir))
            .filter(file => file.endsWith('.webp'))
            .filter(file => !isNaN(parseInt(path.parse(file).name)));
        
        console.log(`Procesando ${files.length} imágenes en ${folderName}`);

        // Dimensiones objetivo (mitad del tamaño original 720p)
        const targetWidth: number = 640;
        const targetHeight: number = 360;
        
        for (const file of files) {
            const inputPath: string = path.join(workDir, file);
            const outputPath: string = path.join(thumbDir, file);
            
            // Verificar dimensiones originales
            const metadata = await sharp(inputPath).metadata();
            console.log(`Procesando ${file}: ${metadata.width}x${metadata.height} -> ${targetWidth}x${targetHeight}`);
            
            await sharp(inputPath)
                .resize(targetWidth, targetHeight, {
                    fit: 'fill', // Forzar el tamaño exacto ya que sabemos que son 16:9
                })
                .webp({ 
                    quality: 60,    // Calidad reducida para miniaturas
                    effort: 6,      // Mayor esfuerzo de compresión
                    lossless: false
                })
                .toFile(outputPath);
            
            // Obtener y mostrar el tamaño del archivo resultante
            const stats = await fs.stat(outputPath);
            const originalStats = await fs.stat(inputPath);
            const reduction: string = ((1 - (stats.size / originalStats.size)) * 100).toFixed(1);
            
            console.log(`Miniatura generada: ${outputPath}`);
            console.log(`Reducción de tamaño: ${reduction}% (${(originalStats.size/1024).toFixed(1)}KB -> ${(stats.size/1024).toFixed(1)}KB)`);
        }
        
        console.log('Proceso completado exitosamente');
        
    } catch (error) {
        console.error('Error al procesar las imágenes:', error);
        throw error;
    }
}

// Ejecutar solo si el script se llama directamente
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    const folderName = process.argv[2];
    if (!folderName) {
        console.error('Debes especificar el nombre de la carpeta como argumento');
        console.error('Ejemplo: npm run thumbnails moss');
        process.exit(1);
    }
    
    generateThumbnails(folderName)
        .catch(error => {
            console.error(error);
            process.exit(1);
        });
}

export default generateThumbnails;
