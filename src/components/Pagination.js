import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Pagination = (props) => {
  const { pagination, setPagination } = props;

  const setPreviousPage = () => {
    if (pagination === 0) {
      return;
    } else {
      return setPagination(pagination - 8);
    }
  };

  const setNextPage = () => {
    return setPagination(pagination + 8);
  };

  return (
    <>
      <ButtonGroup>
        <Button onClick={setPreviousPage}>Load Less</Button>
        <Button disabled>|</Button>
        <Button onClick={setNextPage}>Load More..</Button>
      </ButtonGroup>
    </>
  );
};

export default Pagination;
