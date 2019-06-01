import { CloudDocumentFactory } from './cloud-document-factory';
import ServerDocumentFactory from './server-document-factory';


export default class FactoryOfFactories{
    static get CLOUD(){
        return 0;
    }

    static get SERVER(){
        return 1;
    }

    static getFactory(label: number) {
        switch (label) {
            case FactoryOfFactories.CLOUD:
            return new CloudDocumentFactory();
            case FactoryOfFactories.SERVER:
            return new ServerDocumentFactory();
        }
    }
}