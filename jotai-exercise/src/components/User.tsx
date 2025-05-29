import { useAtom } from "jotai";
import {
  ageAtom,
  firstNameAtom,
  hobbiesAtom,
  lastNameAtom,
} from "../atoms/user.atom";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface formData {
  firstname: string;
  lastname: string;
  age: number;
  hobbies: string[];
}

const User = () => {
  const [firstName, setFirstName] = useAtom(firstNameAtom);
  const [lastName, setLastName] = useAtom(lastNameAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [hobbies, setHobbies] = useAtom(hobbiesAtom);
  const [formData, setFormData] = useState<formData>({
    firstname: "",
    lastname: "",
    age: 0,
    hobbies: [],
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFirstName(formData.firstname);
    setLastName(formData.lastname);
    setAge(formData.age);
    setHobbies(formData.hobbies);
    resetForm()
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      hobbies: [],
    });
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const hobbie = checked ? [...prev.hobbies, value] : prev.hobbies;
      return {
        ...prev,
        hobbies: hobbie,
      };
    });
    // setHobbies((prev) => (checked ? [...prev, value] : prev));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        <h2>Age: {age}</h2>
        <h2>Hobbies: {hobbies}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="firstname"
          value={formData.firstname}
          type="text"
          onChange={handleChange}
          placeholder="Firstname"
          required
        />
        <input
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          type="text"
          placeholder="Lastname"
          required
        />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
          placeholder="Age"
        />
        <p>Hobbies:</p>
        <label htmlFor="soccer">Soccer</label>
        <input
          type="checkbox"
          value="Soccer"
          name="soccer"
          id="soccer"
          checked={formData.hobbies.includes('Soccer')}
          onChange={handleCheckbox}
        />
        <label htmlFor="cooking">Cooking</label>
        <input
          type="checkbox"
          value="Cooking"
          name="cooking"
          id="cooking"
          checked={formData.hobbies.includes('Cooking')}
          onChange={handleCheckbox}
        />
        <label htmlFor="videogames">Videogames</label>
        <input
          type="checkbox"
          value="Videogames"
          name="videogames"
          id="videogames"
          checked={formData.hobbies.includes('Videogames')}
          onChange={handleCheckbox}
        />
        <input type="submit" placeholder="Save" />
      </form>
    </>
  );
};

export default User;
