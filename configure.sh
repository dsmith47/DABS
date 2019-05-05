MODULE_SCRIPTS=""
PERMISSIONS=""

MODE="SCRIPTS"

for FLAG in "$@"; do
  if [ "$FLAG" = "-p" ]; then
    MODE="PERMISSIONS"
  elif [ "$MODE" = "SCRIPTS" ]; then
    MODULE_SCRIPTS="\"$FLAG\",\n$MODULE_SCRIPTS"
  elif [ "$MODE" = "PERMISSIONS" ]; then
    PERMISSIONS="\"$FLAG\""
  fi
done

echo "$MODULE_SCRIPTS"
echo "$PERMISSIONS"

sed -e "s|{{MODULE_SCRIPTS}}|$MODULE_SCRIPTS|" install/manifest.template | sed -e "s|{{PERMISSIONS}}|$PERMISSIONS|" > manifest.json
