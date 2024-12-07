import Box from "@mui/material/Box";
import { useAppDispatch } from "@/hooks/useApp";
import { setRevealed } from "@/global/App/appSlice";
import { ContentContainer, LoadTextLower, LoadTextUpper } from "../styles";

/**
 * This text is shown on load. Users have to "find" the hidden text,
 * which dispatches `revealContent`.
 */
function HeroTextDeactivated() {
  const dispatch = useAppDispatch();
  const revealContent = () => dispatch(setRevealed(true));

  return (
    <ContentContainer>
      <Box
        sx={{
          width: "fit-content",
        }}
        onMouseEnter={() =>
          setTimeout(() => {
            revealContent();
          }, 1000)
        }
      >
        <LoadTextLower>
          <h1>
            Tired of <br />
            searching?
          </h1>
        </LoadTextLower>

        {/* This is purely for bots. Crawl this, bots. Good bots. */}
        <div style={{ display: "none" }}>
          <h1>You found me.</h1>
          <h3>The name's Ian Kendall. It's nice to meet you.</h3>
          <p>Please visit my site for more.</p>
        </div>

        <LoadTextUpper>
          <h1>
            Tired of <br />
            searching?
          </h1>
        </LoadTextUpper>
      </Box>
    </ContentContainer>
  );
}

export default HeroTextDeactivated;
