export class Template {

    public name: string;

    public content: string;

    public createdDate = Date.now();
    public modifiedDate = Date.now();

    public deleted = false;
    public archived = false;

    constructor(name: string = "Unnamed", content: string = "p Hello World!!") {
        this.name = name.trim();
        this.content = content;
    }
}