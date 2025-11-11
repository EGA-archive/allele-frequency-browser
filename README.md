# GDI Allele Frequency Brwoser

## Intro

:rocket:Welcome to GDI Allele Frequency Browser.

This UI is a prototype of an allele frequency browser that was used for GDI MS8, and works together with a backend implementation of a Beacon Network, that hosts as well allele frequency beacon instances.

The current MS8 GDI Allele Frequency Browser was deployed linked to a [BSC Beacon Network](https://github.com/elixir-europe/beacon-network-backend) that hosted beacons deployed with [Beacon production implementation](https://github.com/EGA-archive/beacon2-pi-api).

## Deployment

In order to deploy this UI, edit the [config file](https://github.com/EGA-archive/allele-frequency-browser/blob/main/client/src/config.json) and add your Beacon Network backend inside *API_URL* parameter, as well as a *REDIRECT_URL* with the domain where you are deploying this UI.

After that, while located at the root folder, execute the next command:

```bash
docker compose up -d --build
```

This will run in http://localhost:3000. If you wish to change the port, just edit the docker-compose.yml file with the desired configuration.

## Acknowledgements

This Allele Frequency Browser acknowledges the following institutions for contributing in making it possible the development of the UI:
* [ELIXIR Europe](https://elixir-europe.org/)
* [GDI](https://gdi.onemilliongenomes.eu/)
* [Barcelona Supercomputing Center](https://www.bsc.es/es)
* [Center for Genomic Regulation](https://www.crg.eu/)

Developed by [European Genome-Phenome Archive](https://ega-archive.org/).