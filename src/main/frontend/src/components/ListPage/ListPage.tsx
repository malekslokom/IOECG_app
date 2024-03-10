import HeaderList from "../HeaderList/HeaderLits";
interface ListPageProps {
  title: string;
  bouton: string;
  boutonVisible: boolean;
  onClick: () => void;
}

const ListPage: React.FC<ListPageProps> = ({
  title,
  bouton,
  boutonVisible,
  onClick,
}) => {
  return (
    <div className="my-5">
      <div
        className="rounded bg-white p-3 shadow-sm"
        style={{ height: "100vh" }}
      >
        <div className="analyse-page">
          <div className="header">
            <div className="d-flex align-items-center justify-content-between">
              <h2> {title}</h2>
              {boutonVisible && (
                <div className="mb-0">
                  <button
                    onClick={onClick}
                    className="btn mb-10"
                    style={{
                      backgroundColor: "var(--toggle-fg-before-hover)",
                      color: "white",
                      height: "  37px",
                      width: "121px",
                    }}
                  >
                    {" "}
                    {bouton}
                  </button>
                </div>
              )}
            </div>
            <hr style={{ color: "var(--primary-text-color)" }} />
          </div>

          <HeaderList></HeaderList>
        </div>
      </div>
    </div>
  );
};
export default ListPage;
