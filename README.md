# GDI Allele Frequency Browser

## Intro

:rocket:Welcome to GDI Allele Frequency Browser.

This UI is a prototype of an Allele Frequency (AF) Browser that was developed in the framework of the Genomic Data Infrastructure (GDI) project as part of [Milestone 8](https://www.youtube.com/watch?v=XZAKgOPSWKo), demonstrating the technical infrastructure of the 1+ Million Genomes initiative. The GDI AF Browser prototype is based on the BSC Beacon Network backend implementation and hosts Beacon v2 Production Implementation instances that present aggregated population-level genomic variation data, such as allele frequency and allele counts.

The current MS8 GDI Allele Frequency Browser was deployed linked to a [BSC Beacon Network](https://github.com/elixir-europe/beacon-network-backend) that hosted beacons deployed with [Beacon production implementation](https://github.com/EGA-archive/beacon2-pi-api).

## Deployment

:mountain_cableway:In order to deploy this UI, edit the [config file](https://github.com/EGA-archive/allele-frequency-browser/blob/main/client/src/config.json) and add your Beacon Network backend inside *API_URL* parameter, as well as a *REDIRECT_URL* with the domain where you are deploying this UI.

After that, while located at the root folder, execute the next command:

```bash
docker compose up -d --build
```

This will run in http://localhost:3000. If you wish to change the port, just edit the docker-compose.yml file with the desired configuration.

## Acknowledgements

:checkered_flag:This Allele Frequency Browser acknowledges the following institutions for contributing in making it possible the development of the UI:
* [ELIXIR Europe](https://elixir-europe.org/)
* [GDI](https://gdi.onemilliongenomes.eu/)
* [Barcelona Supercomputing Center](https://www.bsc.es/es)
* [Center for Genomic Regulation](https://www.crg.eu/)

Developed by [European Genome-Phenome Archive](https://ega-archive.org/) at the [Center for Genomic Regulation](https://www.crg.eu/).