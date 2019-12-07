export default class BrandService {
    constructor(){
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async(url)=>{
        const res =await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}; recived ${res.status}`);
        }

        return await res.json();
    }

    getAllProducts = async (url)=>{
        const res = await this.getResource('/products/');
        return res;
    }

    getAllCategoryes = async (url)=>{
        const res = await this.getResource('/categoryes/');
        return res;
    }

    getAllBrands = async (url)=>{
        const res = await this.getResource('/brands/');
        return res;
    }

    getAllDesigners = async (url)=>{
        const res = await this.getResource('/designers/');
        return res;
    }
}