import {Menu} from "@headlessui/react"
import Styles from "./search.module.css";

export function Search() {
  return (
    <Menu as="div" className={Styles.search}> 
      <Menu.Button>
        Selecione uma cidade para iniciar
      </Menu.Button>
      <Menu.Items>
        <div>
          <Menu.Item>
            <span>Sao Paulo, SP</span>
          </Menu.Item>
          <Menu.Item>
            <span>Florianópolis, SC</span>
          </Menu.Item>
          <Menu.Item>
            <span>Porto Alegre, RS</span>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
