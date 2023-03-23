const useTitle = ({children}) => {
    Document.title = `${children} | EasySell`
};

export default useTitle;