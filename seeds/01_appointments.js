
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "appointment"; ALTER SEQUENCE appointment_id_seq RESTART WITH 3;')

  .then(function(){
    var appointments = [{
      id: 1,
      firstName: 'Erin',
      lastName: 'Shaben',
      phone: '5855195054',
      email: 'eshaben@icloud.com',
      apptDate: '2017-08-01',
      apptTime: '12:30:00',
      newPatient: false
    }, {
      id: 2,
      firstName: 'Cody',
      lastName: 'Shaben',
      phone: '5853132626',
      email: 'cshaben@icloud.com',
      apptDate: '2017-07-31',
      apptTime: '09:00:00',
      newPatient: false
    }, {
      id: 3,
      firstName: 'Kiana',
      lastName: 'Redding',
      phone: '5555555555',
      email: 'kredding@icloud.com',
      apptDate: '2017-08-04',
      apptTime: '15:00:00',
      newPatient: false
    }, {
      id: 4,
      firstName: 'Trevor',
      lastName: 'Redding',
      phone: '4444444444',
      email: 'tredding@icloud.com',
      apptDate: '2017-08-04',
      apptTime: '10:30:00',
      newPatient: false
    }, {
      id: 5,
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '2345678923',
      email: 'jdoe@icloud.com',
      apptDate: '2017-08-02',
      apptTime: '16:00:00',
      newPatient: true
    }, {
      id: 6,
      firstName: 'Chloe',
      lastName: 'Shaben',
      phone: '5855195054',
      email: 'chloe@icloud.com',
      apptDate: '2017-08-03',
      apptTime: '1:30:00',
      newPatient: true
    }]
    return knex('appointment').insert(appointments)
  })
};
