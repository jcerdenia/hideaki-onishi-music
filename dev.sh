#!/bin/bash
npm --prefix frontend run dev &
cd sanity
sanity start
