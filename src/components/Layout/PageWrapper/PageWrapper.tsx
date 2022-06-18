interface Props {
   children: JSX.Element;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
   return <div className="wrapper">{children}</div>;
};

export default PageWrapper;
