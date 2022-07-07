const {
    React,
    showToast
} = BdApi;

export default class Plugin {
    start() {
        showToast("Hello World!", {
            type: "info"
        });
    }
}
