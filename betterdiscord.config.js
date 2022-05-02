export default {
    meta: {
        name: "Plugin",
        description: "A plugin for BetterDiscord",
        author: "me"
    },
    esbuild: {
        entryPoints: ["./src/index.tsx"],
        outfile: "./dist/Plugin.plugin.js",
        external: ["betterdiscord"],
        bundle: true,
        format: "cjs",
        target: "esnext",
        jsx: "transform"
    }
}