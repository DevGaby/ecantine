export class Message
{
    public content: string;
    public style: string;
    public dismissed: boolean = false;

    constructor(content, style?)
    {
        this.content = content
        this.style = style || 'info'
    }
}
