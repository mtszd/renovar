<script lang="ts">
    export let textsblocks: { title: string; text: string }[] = [];
</script>

<section>
    <div class="text-wrapper">
        <span>Diseñamos e instalamos soluciones de energía solar a medida para hogares, empresas e industrias.</span>
    </div>
    <div class="text-blocks-wrapper">

        {#each textsblocks as featureLanding}
        <div class="block">
            <h2>{featureLanding.title}</h2>
            <p>{featureLanding.text}</p>
        </div>
        {/each}
    </div>
</section>


<style>
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 4rem 0 6rem 0;
    }

    span{
        font-size: var(--font-size-xlarge);
        font-weight: 600;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-text);
        max-width: 1400px;
        padding: 0 1rem;
    }


    .text-blocks-wrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 2rem;
        padding: 1rem;
    }

    .block {
        display: flex;
        flex-direction: column;
        max-width: 70%;
        gap: 0.75rem;
        text-align:left;
    }

    .block h2 {
        font-size: var(--font-size-base);
        font-weight: 600;
        line-height: 1.2;
    }

    .block p {
        font-size: var(--font-size-small);
        line-height: 2;
        max-width: 240px;
    }

    .text-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1200px;
    height: 300px;
    margin: 2rem auto;
    }    

@media (width > 576px) {
    .text-blocks-wrapper {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
    }

    .block {
        /* justify-content: start; */
        width: 40%;
        max-width: 320px;
        min-height: 100px;
    }
}

@media (width > 992px) {
    
    .text-blocks-wrapper {
        gap:2rem;
        max-width: 90%;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .block {
        max-width: 200px;
    }

}

    @media (width > 1280px) {

    .text-blocks-wrapper {
        gap:4rem;
    }

    .block {
        max-width: 240px;
    }

}
</style>