export const Person = ({ person }) => {
  let partnerText;
  let partnerStatement;

  if (person.sex === 'f') {
    partnerText = 'husband';
  } else {
    partnerText = 'wife';
  }

  if (!person.isMarried) {
    partnerStatement = 'I am not married';
  } else {
    partnerStatement = `${person.partnerName} is my ${partnerText}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerStatement}</p>
    </section>
  );
};
