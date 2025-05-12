import { FormData } from "@/store/formAtom";

export const getAllForms = () => {
  const forms = localStorage.getItem("forms");
  if (forms) {
    const parsedForms = JSON.parse(forms);

    // Sort forms by updatedAt in descending order
    parsedForms.sort((a: FormData, b: FormData) => {
      const dateA = new Date(a.updatedAt || 0);
      const dateB = new Date(b.updatedAt || 0);
      return dateB.getTime() - dateA.getTime();
    });

    return parsedForms;
  }
  return [];
};

export const saveForm = (formData: FormData) => {
  const forms = getAllForms();

  let newForm = { ...formData, updatedAt: new Date() };

  if (formData.id) {
    // Update the existing form
    forms.forEach((form: FormData, index: number) => {
      if (form.id === formData.id) {
        forms[index] = newForm;
      }
    });
  } else {
    // Add the new form to the list of forms
    const currentTime = new Date();
    newForm = {
      ...newForm,
      id: Date.now(),
      createdAt: currentTime,
      updatedAt: currentTime,
    };
    forms.push(newForm);
  }
  localStorage.setItem("forms", JSON.stringify(forms));

  return newForm;
};

export const deleteForm = (id: number) => {
  const forms = getAllForms();
  const updatedForms = forms.filter((form: FormData) => form.id !== id);
  localStorage.setItem("forms", JSON.stringify(updatedForms));
};

export const getFormById = (id: number) => {
  const forms = getAllForms();
  return forms.find((form: FormData) => form.id === id);
};
