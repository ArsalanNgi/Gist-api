import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "./Link";

const FileLink = styled(Link)`
  padding: 5px;
  font-size: 16px;
  font-weight: normal;
`;

const FileList = ({ files }) => {
  return (
    <Wrapper>
      {
        Object.keys(files).map((file) => {
          const { filename, raw_url } = files[file];
          return <FileLink text={filename} link={raw_url} icon="file" key={file} />;
        })
      }
    </Wrapper>
  );
};


// prop types
FileList.propTypes = {
  files: PropTypes.object,
};


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default FileList;