export default function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Le nom est obligatoire";
    }
    if (!values.email) {
      errors.email = "L'adresse e-mail est obligatoire";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "L'adresse e-mail est invalide";
    }
    if (!values.objet || values.objet == "disabled") {
        errors.objet = "Sélectionnez l'objet du message";
      }
    if (!values.message) {
      errors.message = "Le message est obligatoire";
    }
    return errors;
  }
  