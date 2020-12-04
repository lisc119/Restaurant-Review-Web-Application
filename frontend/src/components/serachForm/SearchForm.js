import React, { Fragment, useState } from "react";
import { FormWrapper, Button, Input } from "./style";
import ArrowIcon from "../../images/svg/arrow.svg";

const SearchForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <FormWrapper>
        <Input type="text" placeholder="Search" />
        <Button>
          <span>Select a category...</span>
          <img src={ArrowIcon} onClick={() => setOpen(!open)} alt="img" />
        </Button>
      </FormWrapper>
    </Fragment>
  );
};

export default SearchForm;
