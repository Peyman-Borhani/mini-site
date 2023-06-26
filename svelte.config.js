import  adapter                 from    "@sveltejs/adapter-auto";
import  {vitePreprocess}        from    "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */

// const config
export default  {   
    
        preprocess:     vitePreprocess(),
        kit:            {adapter:  adapter()}
}