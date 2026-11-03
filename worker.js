export default {
    async fetch(request, env, ctx) {
        // You can view your logs in the Observability dashboard
        console.info({message: 'Hello World Worker received a request!'});
        console.info({message: '测试中文' + Date.now()});
        console.info(env.DB);
        const stmt = env.DB.prepare('SELECT * FROM users;');
        const results = await stmt.all();
        return Response.json(results);
    },

    async scheduled(controller, env, ctx) {
        console.log("cron processed" + Date.now());
    },
};
