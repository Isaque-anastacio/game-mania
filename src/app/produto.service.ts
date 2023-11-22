import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Produto } from './models/Produto.models';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";
  
  constructor(private _httpCLient: HttpClient) { }

  getProduto(id:any): Observable<Produto> {
    const urlAtualizar = `${this.url}?id=${id}`;
    return this._httpCLient.get<Produto>(urlAtualizar);
  }

  getProdutos():Observable<Produto[]>{
    return this._httpCLient.get<Produto[]>(this.url);
  }

  cadastrarProduto(produto:Produto):Observable<Produto[]>{
    return this._httpCLient.post<Produto[]>(this.url, produto);
  }

  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpCLient.put<Produto[]>(urlAtualizar, produto);
  }
  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.url}/${id}`;
    return this._httpCLient.delete<Produto[]>(urlDeletar);
  }
}

