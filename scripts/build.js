import esbuild from "esbuild";
import config from "../betterdiscord.config.js";

const args = process.argv.slice(2);

function generateMeta(obj) {
    let fields = "";

    for (const [key, value] of Object.entries(obj)) {
        fields += ` * @${key} ${value}\n`;
    }

    return `/**
 ${fields.trim()}
*/`;
}

await esbuild.build({
    watch: args.includes("--dev"),
    banner: {
        js: generateMeta(config.meta)
    },
    ...config.esbuild
});