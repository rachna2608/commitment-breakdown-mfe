This is a microfrontend (MFE) built with Vite + React. It displays a filtered table of investor commitments by asset class. Exposed as a federated module.

Exposed Module	   Path
CommitmentTable	./src/components/CommitmentTable.tsx

How to Run
npm install
npm run build
npm run preview -- --port 3002

Used inside the main container at http://localhost:4173 when an investor is selected.