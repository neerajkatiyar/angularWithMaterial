interface HTMLElement {  
        addClass(cName : string): string;  
        removeClass(cName :string): string;
        hasClass(cName: string) : boolean;
    } 

HTMLElement.prototype.addClass = function(cName : string): string {  
    return this.className  = (this.className.indexOf(cName) == -1 ? this.className + " " + cName : this.className).trim();
} 

HTMLElement.prototype.removeClass = function(cName : string): string {  
    return this.className  = (this.className.indexOf(cName) == -1 ? this.className : this.className.replace(cName,"")).trim();
} 

HTMLElement.prototype.hasClass = function(cName : string): boolean {  
    return this.className.indexOf(cName) == -1 ? false : true;
} 
