// module.exports = function(app) {
//     var consumer = app.models.consumer;
//     var Role = app.models.Role;
//     var RoleMapping = app.models.RoleMapping;
    
//   consumer.findOne(
//       { email: 'vibhanshurt@gmail.com'}, function(err, users) {
//       if (err) throw err;
  
//       console.log(users);
  
//       //create the admin role
//       Role.create({
//         name: 'admin'
//       }, function(err, role) {
//         if (err) throw err;
//         console.log(role);
//         //make bob an admin
//         role.principals.create({
//           principalType: RoleMapping.USER,
//           principalId: users.id
//         }, function(err, principal) {
//           if (err) throw err;
//         });
//       });
//     });
//   };