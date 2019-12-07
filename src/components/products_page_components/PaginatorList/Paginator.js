import React, {Component} from 'react';
import './paginator.css'

export default class Paginator extends Component{

    choosePage = (event) =>{
        if(event.target.classList.contains('pageNumber')&&event.target.classList.contains('activePageNumber')==false){
            event.preventDefault();
            let paginator = document.querySelector('.paginator');
            for(let i=0; i<paginator.children.length; i++){
                if(paginator.children[i].classList.contains('activePageNumber')){
                    paginator.children[i].classList.remove('activePageNumber');
                }
            }if(event.target.textContent=="1"&&paginator.children[0].classList.contains('activeDirectionButton')){
                paginator.children[0].classList.remove('activeDirectionButton');
                if(paginator.children[paginator.children.length-1].classList.contains('activeDirectionButton')==false){
                    paginator.children[paginator.children.length-1].classList.add('activeDirectionButton')
                }
            }else if(event.target.textContent ==paginator.children[paginator.children.length-2].textContent&&paginator.children[paginator.children.length-1].classList.contains('activeDirectionButton')){
                paginator.children[paginator.children.length-1].classList.remove('activeDirectionButton');
                if(paginator.children[0].classList.contains('activeDirectionButton')==false){
                    paginator.children[0].classList.add('activeDirectionButton')
                }
            }else{
                if(paginator.children[paginator.children.length-1].classList.contains('activeDirectionButton')==false){
                    paginator.children[paginator.children.length-1].classList.add('activeDirectionButton')
                }else if(paginator.children[0].classList.contains('activeDirectionButton')==false){
                    paginator.children[0].classList.add('activeDirectionButton')
                }
            }
            event.target.classList.add('activePageNumber');
            this.props.updateActivePage(event.target.textContent);
        }
    }

    rightClick=(event)=>{
        if(event.target.parentElement.classList.contains('paginator')){
            event.preventDefault();
            let paginator = document.querySelector('.paginator');
            let activePage;
            for(let i=0; i<paginator.children.length; i++){
                if(paginator.children[i].classList.contains('activePageNumber')){
                    activePage=i;
                }
            }
            if(activePage==1&&paginator.children.length!=4){
                paginator.children[0].classList.add('activeDirectionButton');
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage+1].classList.add('activePageNumber');
                this.props.updateActivePage(activePage+1);
            }else if(activePage+1==paginator.children.length-2&&paginator.children.length!=4){
                paginator.children[paginator.children.length-1].classList.remove('activeDirectionButton');
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage+1].classList.add('activePageNumber');
                this.props.updateActivePage(activePage+1);
            }else if(activePage==1&&paginator.children.length==4){
                paginator.children[0].classList.add('activeDirectionButton');
                paginator.children[paginator.children.length-1].classList.remove('activeDirectionButton');
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage+1].classList.add('activePageNumber');
                console.log(activePage+1);
                this.props.updateActivePage(activePage+1);
            }else if(activePage!=paginator.children.length-2){
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage+1].classList.add('activePageNumber');
                this.props.updateActivePage(activePage+1);
            }
        }
    }

    leftClick = (event) =>{
        if(event.target.parentElement.classList.contains('paginator')){
            event.preventDefault();
            let paginator = document.querySelector('.paginator');
            let activePage;
            for(let i=0; i<paginator.children.length; i++){
                if(paginator.children[i].classList.contains('activePageNumber')){
                    activePage=i;
                }
            }
            if(activePage==paginator.children.length-2&&paginator.children.length!=4){
                paginator.children[paginator.children.length-1].classList.add('activeDirectionButton');
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage-1].classList.add('activePageNumber');
                this.props.updateActivePage(activePage-1);
            }else if(activePage==2&&paginator.children.length!=4){
                paginator.children[0].classList.remove('activeDirectionButton');
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage-1].classList.add('activePageNumber');
                this.props.updateActivePage(activePage-1);
            }else if(activePage==2&&paginator.children.length==4){
                paginator.children[paginator.children.length-1].classList.add('activeDirectionButton');
                paginator.children[0].classList.remove('activeDirectionButton');
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage-1].classList.add('activePageNumber');
                this.props.updateActivePage(activePage-1);
            }else if(activePage!=1){
                paginator.children[activePage].classList.remove('activePageNumber');
                paginator.children[activePage-1].classList.add('activePageNumber');
                this.props.updateActivePage(activePage-1);
            }
        }
    }

    renderPageNumbers(){
        let arr = [];
        for(let i=0; i<this.props.pagesCount; i++){
            if(i==0){
                arr.push(<a href="#" className="activePageNumber pageNumber" onClick={this.choosePage}>{i+1}</a>); 
            }else{
                arr.push(<a href="#" className="pageNumber" onClick={this.choosePage}>{i+1}</a>); 
            } 
        }
        return(arr);
    }

    render(){
        return(
            <div className="paginator">
                <a href="" className="backPageButton" onClick={this.leftClick}>&lt;</a>
                {this.renderPageNumbers()}
                <a href="" className="nextPageButton activeDirectionButton" onClick={this.rightClick}>&gt;</a>
            </div>  
        )
    }
}