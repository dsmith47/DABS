MODULE_SCRIPTS="\"src/background.js\""
PERMISSIONS="\"tabs\""

MODE="SCRIPTS"

for FLAG in "$@"; do
  if [ "$FLAG" = "-p" ]; then
    MODE="PERMISSIONS"
  elif [ "$MODE" = "SCRIPTS" ]; then
    MODULE_SCRIPTS="$MODULE_SCRIPTS,\n\"$FLAG\""
  elif [ "$MODE" = "PERMISSIONS" ]; then
    PERMISSIONS="\"$PERMISSIONS\",\"$FLAG\""
  fi
done


echo "$MODULE_SCRIPTS"
echo "$PERMISSIONS"

sed -e "s|{{MODULE_SCRIPTS}}|$MODULE_SCRIPTS|" install/manifest.template | sed -e "s|{{PERMISSIONS}}|$PERMISSIONS|" > manifest.json
