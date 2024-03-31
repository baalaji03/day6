// //3.Write a “person” class to hold all the details.

// class person {
//     constructor(name,age,gender,martialstatus,contact,email){

//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//         this.martialstatus=martialstatus;
//         this.contact=contact;
//         this.email=email;

//     }
// }
// const obj=new person("balaji",25,"male","single",9597574330,"rpsw675@gmaol.com");
// const obj1= new person("adhi",24,"male","single")
// console.log(obj.name,obj.age,obj.gender,obj.martialstatus);
// console.log(obj1.name,obj1.age,obj1.gender,obj1.martialstatus);

//.........................................................................................

// // 1.creating the movie:
// sub task a:

// class Movie {
// constructor(title,studio,rating="PG") {

//     this.title=title;
//     this.studio=studio;
//     this.rating=rating;
// }
// }
// const obj4=new Movie("vikram","RKFI",8.5);
// console.log(obj4.title,obj4.studio,obj4.rating);

//...............................

//sub task b:

// class Movie {
// constructor(title,studio,rating="PG") {

//     this.title=title;
//     this.studio=studio;
//     this.rating=rating;
// }
// }
// const obj3=new Movie("thunivu","zee");
// console.log(obj3.title,obj3.studio,obj3.rating);

//................................

//sub task c:
// class Movie {
//     constructor(title,studio,rating) {
//       this.title = title;
//       this.studio = studio;
//       this.rating = rating;
//     }
   
//   }
//   const movies = [                    
//      new Movie ("Leo","7=screen","PG1"),
//      new Movie ("thunivu","zee","PG"),
//      new Movie ("Jailer","sunpictures","PG"),
//      new Movie ("Master","7=screen","PG"),
//      new Movie ("valimai","zee","PG")
//   ];
  
//   const result = movies
//     .filter(movie => movie.rating === "PG")
//     .map(movie => movie.title);
  
//     console.log(result);
  
//........................................

//sub task d:

// class Movie {
// constructor(title,studio,rating="PG") {

//     this.title=title;
//     this.studio=studio;
//     this.rating=rating;
// }
// }
// const obj3=new Movie("Casino Royale","Eon Productions","PG13");
// console.log("title is " +" " +obj3.title,","+"studio is "+" "+obj3.studio,","+"rating is" +" "+obj3.rating);

//.........................................................................................................

//2.class circle:

// class circle {
//   constructor(radius, color) {
//     this.radius = radius;
//     this.color = color;
//   }
//   get Radius() {
//     return this.radius;
//   }
//   set Radius(n) {
//     this.radius = n;
//   }
//   get Color() {
//     return this.color;
//   }
//   set Color(b) {
//     this.color = b;
//   }
//   get tostring() {
//     return `"Circle [radius=${this.radius},color=${this.color}]"`;
//   }
//   get area() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
//   get circumference() {
//     return 2 * Math.PI * this.radius;
//   }
// }
// let obj = new circle(1.0, "red");

// console.log(obj.Radius);
// console.log(obj.Color);
// console.log(obj.tostring);
// console.log(obj.area);
// console.log(obj.circumference);
// obj.Radius=5.6;
// console.log(obj.Radius);
// obj.Color="purple";
// console.log(obj.Color);

//.........................................................................................................

//4.write a class to calculate the Uber price.:

// class uberprice {

//     constructor(kilometer,price=10){
//         this.kilometer=kilometer;
//         this.price=price;

//     }
//     set Price(n){
//         this.price=n;
//     }
//     get kilo(){
//         return `${this.kilometer*this.price}`;
//     }
// }
// const obj=new uberprice(50);
// console.log(obj.kilo);



class Movie {
  constructor(title,studio,rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
 
}
const movies = [                    
   new Movie ("Leo","7=screen","PG1"),
   new Movie ("thunivu","zee","PG"),
   new Movie ("Jailer","sunpictures","PG"),
   new Movie ("Master","7=screen","PG"),
   new Movie ("valimai","zee","PG")
];

const result = movies
  .filter(movie => movie.rating === "PG")
  .map(movie => movie.title);

  console.log(result);




  