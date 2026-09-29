# jcalgtest_results

Datasets with results as collected by the [JCAlgTest](https://github.com/crocs-muni/JCAlgTest) benchmarking tool.

This repository is the raw-data companion to JCAlgTest: it stores the community-contributed CSV/log/HTML measurement files that JCAlgTest's `AlgTestProcess` tool (or the [jcalgtest.org](https://jcalgtest.org) web page) turns into browsable tables and comparisons. It does not contain any code — only measurement data and a couple of pre-rendered HTML views for TPMs.

## What's measured

JCAlgTest exercises smart cards / TPMs against the JCA/JCE algorithm set in three modes:

| Mode | What it measures |
|---|---|
| `ALG_SUPPORT_EXTENDED` (a.k.a. `ALGSUPPORT`) | Which algorithms and key sizes a card/token supports |
| `ALG_PERFORMANCE_STATIC` (a.k.a. `PERFORMANCE...DATAFIXED`) | Throughput/latency on fixed-size (256-byte) payloads |
| `ALG_PERFORMANCE_VARIABLE` (a.k.a. `PERFORMANCE...DATADEPEND`) | Same, across payload sizes 16–512 bytes, to see how performance scales with data size |

See the [JCAlgTest README](https://github.com/crocs-muni/JCAlgTest#what-do-the-values-in-the-csv-result-file-mean) for the exact CSV column format and how measurements are collected.

## Repository structure

```
jcalgtest_results/
├── javacard/                     JavaCard smart card results
│   └── Profiles/
│       ├── results/               ALG_SUPPORT_EXTENDED results, one CSV per card
│       ├── performance/
│       │   ├── fixed/             ALG_PERFORMANCE_STATIC results, one CSV per card
│       │   └── variable/          ALG_PERFORMANCE_VARIABLE results, one CSV per card
│       └── aid/                   AID/applet-support probe results, one CSV per card
├── tpm/                           Trusted Platform Module (TPM) results
│   ├── profiles/
│   │   ├── results/                Algorithm support CSVs, one per TPM
│   │   └── performance/            Performance CSVs, one per TPM
│   └── web/                        Pre-rendered HTML tables/comparisons for TPM results
├── cplc/                          Card Production Life Cycle (CPLC) data dumps (GlobalPlatformPro output), free-form .txt per card
├── CITATION.bib                   How to cite this dataset / JCAlgTest
└── LICENSE
```

### File naming

Card/TPM result files are named after the device and measurement type, generally following:

```
CardName_OPERATION_ATR_(provided_by_Contributor).csv
```

e.g. `Athena_IDProtect_ICFabDate_2015_ALGSUPPORT__3b_d5_18_ff_81_91_fe_1f_c3_80_73_c8_21_13_09_(provided_by_PetrS).csv`

A card that has been re-measured multiple times, or measured across variants, may have its own subfolder under `javacard/Profiles/results/` (e.g. `NXP_JCOP3_J3H145g_P60/`) containing several related CSVs instead of a single flat file.

## Contributing results

1. Fork this repository.
2. Run JCAlgTest against your card/TPM/token (see the [JCAlgTest usage instructions](https://github.com/crocs-muni/JCAlgTest#usage)).
3. Copy the produced `*.csv` (and, for CPLC dumps, the GlobalPlatformPro `*.txt` output) into the matching subfolder above.
4. Open a pull request.

Alternatively, email the files directly to petr@svenda.com.

Contributions of results for cards not yet in the dataset, as well as newer measurements of already-included cards (firmware updates can change supported algorithms), are both welcome.

## Using this data

This repository only stores raw measurement files — to generate browsable tables/graphs from them, use JCAlgTest's `AlgTestProcess.jar`:

```
java -jar AlgTestProcess.jar path\to\jcalgtest_results\javacard\Profiles HTML
```

See [JCAlgTest's "Optional: generate the web page yourself"](https://github.com/crocs-muni/JCAlgTest#optional-generate-the-web-page-yourself) section for the full set of commands (support tables, performance comparisons, radar/scalability charts). The already-processed, periodically updated results are published at [jcalgtest.org](https://jcalgtest.org).
