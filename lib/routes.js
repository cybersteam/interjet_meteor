//Flow routers create different URL's.
//Here we create the routes and tell them which Templates in the html files to load.
//Essentially providing us with different "pages"

FlowRouter.route('/',{
  //this is the URL name e.g. /home
  name:'home',
  //When we hit this path.. render this template:
  action(){
    BlazeLayout.render('IndexP', {main: 'MainLayout'});
  }
});
FlowRouter.route('/ameta',{
  name:'ameta',
  action(){
    BlazeLayout.render('IndexP', {main: 'AmetaLayout'});
  }
});

FlowRouter.route('/clientzone',{
  name:'clientzone',
  action(){
    BlazeLayout.render('IndexP', {main: 'ClientLayout'});
  }
});

FlowRouter.route('/staffzone',{
  name:'staffzone',
  action(){
    BlazeLayout.render('IndexP', {main: 'StaffLayout'});
    //,{main: 'Staff'}
  }
});
