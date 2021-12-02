import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstname} ${t.lastname}`}>
        {t.firstname} {t.lastname}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
