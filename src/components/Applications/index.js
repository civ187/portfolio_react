import React from "react";
import ApplicationList from '../ApplicationList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Applications({currentCategory}) {
  const {name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <ApplicationList category={currentCategory.name} />
    </section>
  );
}
export default Applications;