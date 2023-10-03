import { flushSync } from "react-dom";
import useLocation from "wouter/use-location";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
function AnimatedLink({children, to}) {
  const [, setLocation] = useLocation();
  return (
    <Button 
              size="medium" 
              variant="contained" 
              sx={{
                bgcolor:'#f6c90e',
                ":hover":{bgcolor:"#cda607"}
              }}
              onClick={(ev) => {
                ev.preventDefault();
                document.startViewTransition(() => {
                  flushSync(() => {
                    setLocation(to);
                  });
                });
              }}
            >
             {children}
    </Button>
  )
}

export default AnimatedLink