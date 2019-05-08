# Copyright (C) 2019 Douglas J. Smith
# Licensed under GNU GPL-3.0-or-later

MODULE_DIR=src/modules

ALL_PFLAGS=

all: $(wildcard ${MODULE_DIR}/*.js )
	sh configure.sh $^ -p ${ALL_PFLAGS}
