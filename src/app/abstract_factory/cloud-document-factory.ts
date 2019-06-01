export class CloudDocumentFactory{
    static get PdfDocument(){
        return 0;
    }

    static get DocDocument(){
        return 1;
    }

    static get RtfDocument(){
        return 2;
    }

    getDocument(label: number){
        switch(label) {
            case CloudDocumentFactory.RtfDocument:
                    return new CloudDocumentRtf();
            case CloudDocumentFactory.DocDocument:
                return new CloudDocumentDoc();
            case CloudDocumentFactory.PdfDocument:
                return new CloudDocumentPdf();
            default:
                throw new Error('Document isn\'t recognized');
        }
    }
}

export class CloudDocument {
    type: string;
    constructor(type: string) {
        this.type = type 
    }

    public createDocument(type) {
        console.log('Create,',type,' document');
    }
}

class CloudDocumentRtf extends CloudDocument{
    constructor(){
        super('Rtf');
    }
}

class CloudDocumentDoc extends CloudDocument{
    constructor(){
        super('Doc');
    }
}


class CloudDocumentPdf extends CloudDocument{
    constructor(){
        super('Pdf');
    }
}