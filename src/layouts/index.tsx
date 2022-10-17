import { css } from "@emotion/react";

const Layout = ({ children, ...props }: any) => {
  const layoutCss = {
    body: css({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      alignItems: "center",
    }),
  };
  return (
    <div css={layoutCss.body} {...props}>
      {children}
    </div>
  );
};

export default Layout;
