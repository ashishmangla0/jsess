function Course(title,instructor,level,published,views){
    this.title = title,
    this.instructor = instructor,
    this.level = level ,
    this.published = published,
    this.views = views
    this.updateViews = function(){
        return ++this.views
    }
}


var courses = [
    new Course ("javascript",'ashish',1,true,1111,11111),
    new Course ("javascript",'ashish',1,true,1111,11111),
    new Course ("javascript",'ashish',1,true,1111,11111)
]

var course01 = new Course ("javascript",'ashish',1,true,1111,11111)
console.log(course01.updateViews());
console.log(courses);