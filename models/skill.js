



const skills = [
	{id: 125223, skill: 'HTML', done: true},
	{id: 127904, skill: 'CSS', done: true},
	{id: 139608, skill: 'JavaScript', done: true},
	{id: 139558, skill: 'Python', done: false},
	{id: 139568, skill: 'SQL', done: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function getAll() {
    return skills;
  }
  function getOne(id) {

    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);

  }

  function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }