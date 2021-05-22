import React from 'react';

import { PageTitle } from '../../common/PageTitle';
import { Note } from '../../common/Note';

function AddBudgetRender({ list, selected, rightTitle, noteContent, budget }) {
  return (
    <div className="add-budget">
      <div className="space--medium">&nbsp;</div>

      {list && (
        <PageTitle list={list} selected={selected} rightTitle={rightTitle} />
      )}

      <div className="space--small">&nbsp;</div>

      <Note content={noteContent} />
    </div>
  );
}

export default AddBudgetRender;
