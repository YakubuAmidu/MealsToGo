import styled from "styled-components/native";

const defaultTexStyles = (theme) => `
 font-family: ${theme.fonts.body};
 font-weight: ${theme.fontWeights.regular};
 color: ${theme.colors.text.primary}
 flex-wrap: wrap;
 margin-top: 0px;
 margin-bottom: 0px;
`;

const body = (theme) => `
 font-size: ${theme.fontSizes.body}
`;

const hint = (theme) => `
 font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
 color: ${theme.colors.text.error}
`;
