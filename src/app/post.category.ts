export class Post{
  constructor(

    public title: string,
    public date: string,
    public category: string,
    public write: string,
    public id?: number
  ){}
}

export interface Post{
  post: Post[]
}
