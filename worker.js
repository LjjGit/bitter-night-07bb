export default {
    async fetch(request, env, ctx) {
        // You can view your logs in the Observability dashboard
        console.info({message: 'Hello World Worker received a request!'});
        console.info({message: '测试中文' + Date.now()});
        console.info(env.prod_d1);
        return new Response('github aa你好世界 Hello World!' + Date.now());
    },

    async scheduled(controller, env, ctx) {
        console.log("cron processed" + Date.now());
    },
};
