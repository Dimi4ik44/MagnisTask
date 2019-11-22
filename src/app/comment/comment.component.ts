import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  Comments :Comment[]=[];
  Ids:number = 1;
  IdsSub:number = 0;
  //hover:boolean;
    

  s=new Comment("Думайте о переменных, как о способе хранения информации, которую вы хотите использовать на протяжении написания всех стилей проекта. Вы можете хранить в переменных цвета, стеки шрифтов или любые другие значения CSS, которые вы хотите использовать. Чтобы создать переменную в Sass нужно использовать символ $. Рассмотрим пример:",0);
  ngOnInit() {
    this.Comments.push(this.s);
    
  }
  g:Comment;
  SubC:SubComment;
  suremove(id)
  {
    this.Comments.forEach(element => {
      const index = element.SubComments.indexOf(element.SubComments[element.SubComments.findIndex(x => x.getSId() == id)],0);
      if (index > -1) {
        element.SubComments.splice(index, 1);
        
                      }
    });
  }

  Remove(id)
  {
    const index = this.Comments.indexOf(this.Comments[this.Comments.findIndex(x => x.getId() == id)],0);
    if (index > -1) {
      this.Comments.splice(index, 1);
      
                    }
  }

  AddComment(value,Ids) {
    if(value.value!="")
    {
    this.g=new Comment(value.value,this.Ids);
    value.value="";
    this.Comments.push(this.g);
    this.Ids++;
    }

  }
  AddSubComment(value,IdC) {
    if(value.value!="")
    {
    this.SubC=new SubComment(value.value,IdC.id,this.IdsSub);
    value.value="";
    this.Comments.forEach(element => {
      if(element.getId()==IdC.id)
      {
        element.pushSubComent(this.SubC);
      }
      
    });
    }
    this.IdsSub++;

  }
  

}

export class Comment {
  private CommentId:number;
  private Data:string;
  public SubComments:SubComment[]=[];
  constructor(data:string,Id:number) {
  this.Data=data;
  this.CommentId=Id;
   }  
   getData():string {
    return this.Data;
   }
   getId():number {
    return this.CommentId;
   }
   pushSubComent(SuCo:SubComment):void {
     this.SubComments.push(SuCo);
   }
}
export class SubComment {
  private SubCommentId:number;
  private CommentId:number;
  private Data:string;
  private SubComments:SubComment[];
  constructor(data:string,comId:number,subId:number) {
  this.Data=data;
  this.CommentId=comId;
  this.SubCommentId=subId;
   }  
   getData():string {
    return this.Data;
   }
   getSId():number{
     return this.SubCommentId;
   }
}
