export default class Logo {
    constructor(imagepath, title, comment) {
        this.imagepath = imagepath;
        this.title = title;
        this.comment = comment;
    }

    render() {
        var html = `
            <div class="logobox">
                <img src="./img/${this.imagepath}" class="bottom_layer"/>
                <div class="top_layer">
                    <h4>${this.title}</h4>
                    <p>${this.comment}</p>
                </div>
            </div>
            `;
        return html;
    }
}
