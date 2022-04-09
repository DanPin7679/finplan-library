import { Card, CardContent, Typography } from "@mui/material";
import { width } from "@mui/system";
import { modules } from "./FinPlanModules";

const Library = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {modules.map((module) => (
        <Card key={module.name} sx={{ width: "350px", height: "350px" }}>
          <CardContent>
            <Typography variant="h5">{module.name}</Typography>
            <Typography>{module.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Library;
