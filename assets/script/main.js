const setup = () =>{
  const outputUser = document.querySelector('.outputUser');
  const btn = document.querySelector('button');

  const addItem = () =>{
  //GET ALL INPUT
    const nameUser = document.querySelector('#name');
    const dayOfBirth = document.querySelector('#birth-day');
    const monthOfBirth = document.querySelector('#birth-month');
    const yearOfBirth = document.querySelector('#birth-year');
    const gender = document.querySelector('input[type=radio]:checked');

  //FILL OBJECT
    const person = {
      name: nameUser.value,
      day: dayOfBirth.value,
      month: monthOfBirth.value,
      year: yearOfBirth.value,
    }

  //ADD DIV WITH PERSON DATA
    const addDiv = () =>{
      const new_div = document.createElement('div');
      const firstLine = document.createElement('p');
      const scndLine = document.createElement('p');
      firstLine.innerHTML = person.name;
      scndLine.innerHTML = ` ${person.day}/${person.month}/${person.year}`;

      //ADD CLASSES
      if(gender.value == 'male'){
        new_div.setAttribute('class', 'male outputBox');
      }else if(gender.value == 'female'){
        new_div.setAttribute('class', 'female outputBox');
      }else{
        new_div.setAttribute('class', 'other outputBox');
      }

      new_div.append(firstLine, scndLine);
      outputUser.append(new_div);
    }
    
  //CLEAR BOXES
    const resetBoxes = () =>{
      nameUser.value = "";
      dayOfBirth.value = "--";
      monthOfBirth.value = "--";
      yearOfBirth.value = "--";
      gender.checked = false;

    }

  //CALL FUNCTIONS
    addDiv();
    resetBoxes();
  }

  btn.addEventListener('click', addItem);
}

//EXECUTE WHEN WINDOW IS READY
window.addEventListener('load', setup);