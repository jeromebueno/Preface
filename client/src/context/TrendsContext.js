import {createContext} from "react";

const TrendsContext = createContext({
    trends: [],
    trend:{},
    loadTrends : () => {},
})

export default TrendsContext